import PropTypes from 'prop-types';

import { Container } from './styles';

export function FormGroup({ children, error, label }) {
  return (
    <Container>
      <label>
        {label}
        {children}
      </label>
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
};

FormGroup.defaultProps = {
  error: '',
};
