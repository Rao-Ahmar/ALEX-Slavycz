const SVG = {
  Cross: () => (
    <svg viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="0.353553"
        y1="0.646447"
        x2="30.3535"
        y2="30.6464"
        stroke="black"
      />
      <line
        x1="30.3536"
        y1="1.35355"
        x2="0.353622"
        y2="31.3535"
        stroke="black"
      />
    </svg>
  ),
  Next: () => (
    <svg viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="15.6464"
        y1="15.8536"
        x2="0.646466"
        y2="0.853573"
        stroke="#6D6D6D"
      />
      <line
        x1="0.646447"
        y1="30.1464"
        x2="15.6464"
        y2="15.1465"
        stroke="#6D6D6D"
      />
    </svg>
  ),
  Back: () => (
    <svg viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="0.353553"
        y1="15.1464"
        x2="15.3535"
        y2="30.1464"
        stroke="#6D6D6D"
      />
      <line
        x1="15.3536"
        y1="0.853553"
        x2="0.353569"
        y2="15.8535"
        stroke="#6D6D6D"
      />
    </svg>
  )
};

export default SVG;
