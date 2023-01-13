import {
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import data from '../utils/data.json';
import { filterData } from '../utils/filter-data';

export type Filters = {
  timeFilter?: 'DAY' | 'MONTH' | 'WEEK';
  typePayment?: Array<'LINK' | 'DATAPHONE' | 'ALL'>;
};

type FilterDataValues = {
  filteredData: any[];
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
};

const FilterDataContext = createContext<FilterDataValues>({
  filteredData: [],
  filters: {},
  setFilters: () => {},
});

export const useFilterDataContext = () => {
  return useContext(FilterDataContext);
};

type FilterDataProviderProps = {
  children: ReactNode;
};

export const FilterDataProvider: FunctionComponent<FilterDataProviderProps> = ({
  children,
}) => {
  const [filteredData, setFilteredData] = useState<any[]>(data.sales);
  const [filters, setFilters] = useState<Filters>({});

  useEffect(() => {
    const filtersSaved = JSON.parse(localStorage.getItem('filters') || '{}');
    if (filtersSaved) {
      setFilteredData(filtersSaved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(filters));
    setFilteredData(filterData(filters, data.sales));
  }, [filters]);

  return (
    <FilterDataContext.Provider value={{ filteredData, filters, setFilters }}>
      {children}
    </FilterDataContext.Provider>
  );
};
