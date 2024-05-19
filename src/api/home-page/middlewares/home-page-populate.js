'use strict';

/**
 * `home-page-populate` middleware
 */

const populate = {
  header: {
    populate: {
      logo: {
        populate: true,
        fields: ["name","alternativeText","width","height","url"]
      }
    }
  },
  blocks: {
    populate: {
      link:{
        populate: true,
      },
      image: {
        populate: true,
        fields: ["name","alternativeText","width","height","url"]
      },
      card: {
        populate: {
          image: {
            fields: ["name","alternativeText","width","height","url"]
          }
        }
      },
      
      service1Image: {
        populate: true,
        fields: ["name","alternativeText","width","height","url"]
      },
      serviceCard: {
        populate: {
          service1Image: {
            fields: ["name","alternativeText","width","height","url"]
          }
        }
      },
      
    }
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In home-page-populate middleware.');
    ctx.query = {
      populate,
      ...ctx.query
    }

    await next();
  };
};
