FROM node:20.17.0-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./
RUN install yarn
RUN yarn install 

FROM base AS build

COPY . .

RUN yarn prisma generate

RUN yarn build

FROM base AS production

WORKDIR /app

COPY --from=build /app/package.json /app/yarn.lock ./

RUN yarn install --production 

COPY --from=build /app/dist ./dist
COPY --from=build /app/generated/prisma ./generated/prisma

CMD ["node", "dist/main"]