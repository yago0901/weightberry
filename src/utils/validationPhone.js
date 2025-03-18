const formatPolishPhone = (phone) => {
  let cleanedPhone = phone.replace(/\s+/g, '');

  if (/^(048|\+48|48)\d{9}$/.test(cleanedPhone)) {
    cleanedPhone = cleanedPhone.replace(/^(048|\+48|48)/, '');
  }

  return /^\d{9}$/.test(cleanedPhone) ? cleanedPhone : null;
};

export default formatPolishPhone;