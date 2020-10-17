import { request } from "express";
import Orphanage from "../models/Orphanage";
import viewImages from './images_views';

export default {
  reder(orphanage: Orphanage){
    return{
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: viewImages.rederMany(orphanage.images)
    };
  },
  rederMany(orphanages: Orphanage[]){
    return orphanages.map(orphanage => this.reder(orphanage));
  }
}