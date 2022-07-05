export const getTtrimester = (week: number) => {
  const FIRST_TRIMESTER = 'Первый триместр';
  const SECOND_TRIMESTER = 'Второй триместр';
  const THIRD_TRIMESTER = 'Третий триместр';
  if (week <= 13) {
    return FIRST_TRIMESTER;
  };
  if ( week > 13 && week <= 27) {
    return SECOND_TRIMESTER;
  }
  if (week >= 28 && week < 45) {
    return THIRD_TRIMESTER
  } 
};

export const getGestationalAge = (date:string) => {
  const today: Date = new Date();
}