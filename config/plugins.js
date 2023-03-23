module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "strapi-provider-upload-dos",
        providerOptions: {
          key: env('DO_SPACE_ACCESS_KEY'),
          secret: env('DO_SPACE_SECRET_KEY'),
          endpoint: env('DO_SPACE_ENDPOINT'),
          space: env('DO_SPACE_BUCKET'),
          directory: env('DO_SPACE_DIRECTORY')
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