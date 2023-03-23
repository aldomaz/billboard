module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "strapi-provider-upload-dos",
        providerOptions: {
          key: process.env.DO_SPACE_ACCESS_KEY,
          secret: process.env.DO_SPACE_SECRET_KEY,
          endpoint: process.env.DO_SPACE_ENDPOINT,
          space: process.env.DO_SPACE_BUCKET,
          directory: process.env.DO_SPACE_DIRECTORY,
          cdn: process.env.DO_SPACE_CDN,
        },
      },
    },

    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST'),
          port: env('SMTP_PORT'),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
        },
        settings: {
          defaultFrom: 'aldormazon@gmail.com',
          defaultReplyTo: 'aldomazrocket@gmail.com',
        },
      },
    },
});