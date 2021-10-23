FROM node:15

ENV BWS_SERVE_HOST=0.0.0.0
ENV BWS_SERVE_PORT=3000
EXPOSE 3000

VOLUME /bewhiskered
WORKDIR /bewhiskered

CMD npm ci && npx gulp watch
