import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksGetInTouch extends Schema.Component {
  collectionName: 'components_blocks_get_in_touches';
  info: {
    displayName: 'getInTouch';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    email: Attribute.String;
    logo: Attribute.Media;
    companyName: Attribute.String;
    copyRight: Attribute.String;
    privacyPolicyLink: Attribute.String;
    impressumLink: Attribute.String;
  };
}

export interface BlocksHeroSection extends Schema.Component {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    workWithUsBtn: Attribute.Component<'elements.button-link'>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'row';
    description: '';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
    WCU_Title: Attribute.String;
  };
}

export interface BlocksServices extends Schema.Component {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    title: Attribute.String;
    serviceCard: Attribute.Component<'elements.service-card', true>;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'button link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.Text;
    isExtenalLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    style: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsServiceCard extends Schema.Component {
  collectionName: 'components_elements_service_cards';
  info: {
    displayName: 'service card';
  };
  attributes: {
    service1Image: Attribute.Media;
    heading: Attribute.String;
    description: Attribute.Text;
    link: Attribute.String;
  };
}

export interface Section1Header extends Schema.Component {
  collectionName: 'components_section1_headers';
  info: {
    displayName: 'header';
    icon: 'bulletList';
  };
  attributes: {
    companyName: Attribute.String;
    homeButton: Attribute.String;
    careersButton: Attribute.String;
    logo: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.get-in-touch': BlocksGetInTouch;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.row': BlocksRow;
      'blocks.services': BlocksServices;
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'elements.service-card': ElementsServiceCard;
      'section1.header': Section1Header;
    }
  }
}
