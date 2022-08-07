import AlpineIcon from '../components/icons/places/AlpineIcon';
import BeachIcon from '../components/icons/places/BeachIcon';
import CabinIcon from '../components/icons/places/CabinIcon';
import CampingIcon from '../components/icons/places/CampingIcon';
import CountryHouseIcon from '../components/icons/places/CountryHouseIcon';
import EcologicalIcon from '../components/icons/places/EcologicalIcon';
import FarmIcon from '../components/icons/places/FarmIcon';
import IceIcon from '../components/icons/places/IceIcon';
import IslandIcon from '../components/icons/places/IslandIcon';
import NationalParkIcon from '../components/icons/places/NationalParkIcon';
import PoolIcon from '../components/icons/places/PoolIcon';

const PLACE_TYPE = {
  ISLAND: { icon: IslandIcon, text: 'Islas' },
  NATIONAL_PARK: { icon: NationalParkIcon, text: 'Parques nacionales' },
  INCREDIBLE_POOL: { icon: PoolIcon, text: 'Piletas increibles' },
  CABIN: { icon: CabinIcon, text: 'Cabañas' },
  ARTIC: { icon: IceIcon, text: 'Artico' },
  ALPINE: { icon: AlpineIcon, text: 'Alpinas' },
  ECOLOGICAL: { icon: EcologicalIcon, text: 'Ecologicas' },
  FARM: { icon: FarmIcon, text: 'Granjas' },
  COUNTRY_HOUSES: { icon: CountryHouseIcon, text: 'Casas de campo' },
  CAMPING: { icon: CampingIcon, text: 'Camping' },
  BEACH: { icon: BeachIcon, text: 'Playa' },
};

export default PLACE_TYPE;
