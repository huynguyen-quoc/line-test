import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatString } from '../../utils/helpers';

function FormatInput(props) {
  const { formatType, onChange, ...rest } = props;
  const [text, formatText] = useState('');
  return (
    <React.Fragment>
      <input
        {...rest}
        onChange={event => {
          const formatStr = formatString(event.target.value, formatType);
          onChange(formatStr);
          formatText(formatStr);
        }}
        value={text}
      />
    </React.Fragment>
  );
}
FormatInput.propTypes = {
  formatType: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormatInput;
