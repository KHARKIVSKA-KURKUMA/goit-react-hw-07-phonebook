import { useDispatch, useSelector } from 'react-redux';
import { Container, TextFilter, InputFilter } from './Filter.styled';
import { filterSelector } from 'store/selectors';
import { changeFilter } from 'store/filter/filterSlice';

const Filter = () => {
  const { filter } = useSelector(filterSelector);
  const dispatch = useDispatch();
  /* ------------------------------ CHANGE FILTER ----------------------------- */
  const onChange = e => dispatch(changeFilter(e.currentTarget.value));
  /* -------------------------------------------------------------------------- */
  return (
    <Container>
      <TextFilter>Find contacts by name</TextFilter>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </Container>
  );
};

export default Filter;
