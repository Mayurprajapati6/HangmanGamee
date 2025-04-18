function getStyles(buttonType) {
    if(buttonType === 'primary') {
      return `bg-blue-500 text-white`;
    } else if(buttonType === 'secondary') {
      return `bg-gray-500 text-white`;
    } else if(buttonType === 'danger') {
      return `bg-[#023e8a] text-white`;
    } else if(buttonType === 'warning') {
      return `bg-red-700 text-white`;
    } else if(buttonType === 'success') {
      return `bg-green-500 text-white`;
    }
}
export default getStyles;   