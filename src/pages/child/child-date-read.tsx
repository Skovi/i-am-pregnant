import { FC } from "react";

type TProps = {
  child: {
    name: string,
    termOfPregnancy: string,
    firstDayOfLastPeriod: string,
    conceptionDate: string,
    childbirth: string,
    gender: string,
    length: number | null,
    weight: number | null,
    sizeComparableTo: {
      asFruits: string,
      asAnimals: string,
      asSweets: string,
    },
  },
};

export const ChildDateRead: FC<TProps> = ({ child }) => {
  return (
    <div className="container-child">
      <h2>{child.name}</h2>
      <h2>{child.termOfPregnancy}</h2>
      <h2>Планируемая дата рождения: {child.childbirth}</h2>
    </div>
  )
};
