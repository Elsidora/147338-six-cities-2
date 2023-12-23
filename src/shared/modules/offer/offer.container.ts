import { Container } from 'inversify';
import { OfferService } from './offer-service.interface.js';
import { Components } from '../../types/index.js';
import { DefaultOfferService } from './default-offer.service.js';
import { types } from '@typegoose/typegoose';
import { OfferEntity, OfferModel } from './offer.entity.js';

export function createOfferContainer() {
  const offerContainer = new Container();

  offerContainer.bind<OfferService>(Components.OfferService).to(DefaultOfferService).inSingletonScope();
  offerContainer.bind<types.ModelType<OfferEntity>>(Components.OfferModel).toConstantValue(OfferModel);

  return offerContainer;
}
