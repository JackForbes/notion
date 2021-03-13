import React from 'react';
import { InstitutionData } from '../loader';

export const InstitutionCard: React.FC<{ institution: InstitutionData }> = ({ institution }) => (
  <div className="m-top--xx-large flex-100 flex-gt-xs-50 flex-gt-sm-25">
    <div className="box-shadow b--rounded-sm p-around--medium">
      { institution.CITY && institution.STABBR && (
        <p className="meta gray-0 m-top--none">{ institution.CITY } · { institution.STABBR }</p>
      )}
      { institution.INSTNM && (
        <h4 className="m-top--xx-small">{ institution.INSTNM }</h4>
      )}
      <a className="ellipsis" href={`http://${institution.INSTURL}`} rel="noopener noreferrer" target="_blank">
        { institution.INSTURL }
      </a>
    </div>
  </div>
);
