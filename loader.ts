import { readRemoteFile } from 'react-papaparse';

export type InstitutionData = {
  UNITID: string;
  INSTNM: string;
  CITY: string;
  STABBR: string;
  INSTURL: string;
};

type CSVResponse = { data: Array<InstitutionData>, meta: object };
type Institutions = InstitutionData[];

export const loadCSV = async (path: string): Promise<Institutions> => {
  return new Promise((resolve, reject) => {
    try {
      readRemoteFile(path, {
        header: true,
        complete: (results: CSVResponse) => {
          resolve(results.data);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};
