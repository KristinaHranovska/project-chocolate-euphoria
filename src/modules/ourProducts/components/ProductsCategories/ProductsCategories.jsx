import clsx from 'clsx';
import style from './ProductsCategories.module.scss';

const ProductsCategories = ({
  categoriseList,
  chooseCategory,
  currentCategory,
}) => {
  return (
    <>
      <ul className={style.categoriesList}>
        {categoriseList.length > 0 &&
          categoriseList.map((category) => (
            <li
              key={category.key}
              className={clsx(style.categoriesItem, {
                [style.active]: category.name === currentCategory,
              })}
            >
              <h3
                onClick={() => chooseCategory(category.name)}
                className={clsx(style.category, {
                  [style.active]: category.name === currentCategory,
                })}
              >
                {category.name}
              </h3>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ProductsCategories;
