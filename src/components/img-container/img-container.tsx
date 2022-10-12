import { FC } from "react";
import Cyplenok from '../../image/cyplenok.jpg';
import Kiwi from '../../image/Kiwi.jpg';
import Kapkeiki from '../../image/kapkeiki.jpg';

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

export const ImgContainer:FC<TProps> = ({child}) => {
  return (
    <div className="container-size">
      <h3>Рост: {child.length} см (от макушки до пяток)</h3>
      <h3>Вес: {child.weight} грамм</h3>
      <div className="size-comparable-to">
        <p>На этом этапе размер можно сравнить с:</p>
        <ul>
          <li className="list-size">
            <p>{child.sizeComparableTo.asAnimals}</p>
            <img className="img-size" alt={child.sizeComparableTo.asAnimals} src={Cyplenok} />
          </li>
          <li className="list-size">
            <p>{child.sizeComparableTo.asFruits}</p>
            <img alt={child.sizeComparableTo.asFruits} src={Kiwi} />
          </li>
          <li className="list-size">
            <p>{child.sizeComparableTo.asSweets}</p>
            <img alt={child.sizeComparableTo.asSweets} src={Kapkeiki} />
          </li>
        </ul>
      </div>
    </div>
  )
};
