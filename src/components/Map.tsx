import Picture from '@/components/Picture';
import mapSVG from '@/icons/Koppen-Geiger_Map_Cfc_present.svg';

const Map = () => {
	return (
		<div className="size-full">
			<Picture src={mapSVG.src} alt="Map" height={mapSVG.height} width={mapSVG.width} />
		</div>
	);
};

export default Map;
