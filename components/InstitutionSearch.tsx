import React, { useEffect, useState } from 'react';
import { InstitutionData, loadCSV } from '../loader';
import { InstitutionCard } from '../components/InstitutionCard';

const INSTITUTIONS_ENDPOINT = 'https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv';

export const InstitutionSearch: React.FC = () => {
  const [institutions, setInstitutions] = useState<InstitutionData[]>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    (async function run() {
      await getInstitutions();
    })();
  }, []);

  const getInstitutions = async () => {
    const results = await loadCSV(INSTITUTIONS_ENDPOINT);
    setInstitutions(results);
  };

  const textMatch = (item: InstitutionData): boolean => {
    const searchTerm = query.toLowerCase();
    const itemText = (item.INSTNM + item.CITY + item.INSTURL).toLowerCase();
    return itemText.indexOf(searchTerm) !== -1;
  }

  return (
    <>
      <input className="w--100p mw--352-gt-xs" onChange={(event) => setQuery(event.target.value)} placeholder="Search..." value={query} />
      <div className="m-table--medium layout-row layout-align-start-start layout-wrap" itemProp="mainEntityOfPage" itemScope itemType="https://schema.org/CollectionPage">
        { institutions.filter(textMatch).map((institution: InstitutionData) => (
          <InstitutionCard institution={institution} key={institution.UNITID} />
        ))}
      </div>
    </>
  );
};
