import { useProducts } from 'contexts/products-context';
import rudderanalytics from '../../utils/rudderstack';

import * as S from './style';

export const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

const Filter = () => {
  const { filters, filterProducts } = useProducts();

  const selectedCheckboxes = new Set(filters);

  const toggleCheckbox = (label: string) => {
    const wasSelected = selectedCheckboxes.has(label);
    const filterAction = wasSelected ? 'removed' : 'added';
    
    if (wasSelected) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    const filters = Array.from(selectedCheckboxes) as [];

    // Track filter applied with RudderStack
    rudderanalytics.track('Filter Applied', {
      filter_type: 'size',
      filter_value: label,
      active_filters: filters,
      filter_action: filterAction
    });

    filterProducts(filters);
  };

  const createCheckbox = (label: string) => (
    <S.Checkbox label={label} handleOnChange={toggleCheckbox} key={label} />
  );

  const createCheckboxes = () => availableSizes.map(createCheckbox);

  return (
    <S.Container>
      <S.Title>Sizes:</S.Title>
      {createCheckboxes()}
    </S.Container>
  );
};

export default Filter;
