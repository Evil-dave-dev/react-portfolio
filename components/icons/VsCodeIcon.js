const VsCodeIcon = (props) => {
  const size = props.size || 80;
  return (
    <svg fill="none" viewBox="0 0 32 32" width={size} height={size} {...props}>
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="23.79"
        x2="23.79"
        y1="2"
        y2="30"
      >
        <stop offset="0" stopColor="#32b5f1" />
        <stop offset="1" stopColor="#2b9fed" />
      </linearGradient>
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1="21.0018"
        x2="1.0217"
        y1="5.53398"
        y2="22.3051"
      >
        <stop offset="0" stopColor="#0f6fb3" />
        <stop offset=".270551" stopColor="#1279b7" />
        <stop offset=".421376" stopColor="#1176b5" />
        <stop offset=".618197" stopColor="#0e69ac" />
        <stop offset=".855344" stopColor="#0f70af" />
        <stop offset="1" stopColor="#0f6dad" />
      </linearGradient>
      <linearGradient
        id="c"
        gradientUnits="userSpaceOnUse"
        x1="1.15522"
        x2="21.0791"
        y1="9.98389"
        y2="26.4808"
      >
        <stop offset="0" stopColor="#1791d2" />
        <stop offset="1" stopColor="#1173c5" />
      </linearGradient>
      <path
        d="m21.0016 3.11679c0-.87896-.9841-.87897-1.4215-.7691.6123-.48343 1.3304-.36622 1.5855-.21973l5.9134 2.89951c.5634.27628.9208.85113.9208 1.4811v19.07453c0 .6384-.3669 1.2194-.9418 1.4912l-5.5643 2.6311c-.3828.1647-1.2138.5713-1.9136-.0001.8748.1649 1.3486-.4577 1.4215-.8789z"
        fill="#1F9CF0"
      />
      <path
        d="m19.6512 2.3319c.4642-.09173 1.3506-.04919 1.3506.78495v6.56569l-17.92821 13.56276c-.31337.2371-.75439.1977-1.0213-.0911l-1.847758-1.9994c-.2894678-.3132-.2692144-.8035.045092-1.0915l19.330576-17.71555z"
        fill="#0065A9"
      />
      <path
        d="m21.0018 22.3708-17.92821-13.56279c-.31337-.23707-.75439-.19773-1.0213.09109l-1.847758 1.9994c-.2894678.3132-.2692144.8035.045092 1.0916l19.330576 17.7155c.8748.1648 1.3487-.4578 1.4216-.879z"
        fill="#007ACC"
      />
    </svg>
  );
};

export default VsCodeIcon;
