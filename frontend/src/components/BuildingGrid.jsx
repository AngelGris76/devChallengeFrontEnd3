import BUILDINGS from '../constants/buildingMock';
import Building from './Building';

const BuildingGrid = () => {
  const renderedBildings = BUILDINGS.map((build) => (
    <Building key={build.id} {...build} />
  ));

  return <div>{renderedBildings}</div>;
};

export default BuildingGrid;
