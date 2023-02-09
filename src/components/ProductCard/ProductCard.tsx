import React from 'react';
import './ProductCard.css';

export interface ProductCardProps  {
  img?: string;
  size?: 'default'|'small';
  title?: string;
  disabled?: boolean;
}

export const ProductCard  = ({
    disabled = false,
    size = 'default',
    title,
    ...props
  }: ProductCardProps) => {
//const ProductCard: React.FunctionComponent<ProductCardProps> = (props: ProductCardProps) => {
  const mode = disabled ? 'disabled' : '';
  
  return (
    <div className='card'>
      <div className={`product-card--${size} ? product-card : ''`} {...props}>
        <img className={mode} src={props.img} alt={`product pic ${props.img}`} />
        <div className='product-description'>
          <h2 className='product-title'>{title}</h2>
          <div className='product-price'>
            Rp 3.550.000
          </div>
          <div className='discount'>
            <span className='discount--value'>Rp 1.000.000</span>
            <span className='discount--percentage'>50%</span>
          </div>

          { disabled ? (
              <button className='button disabled'>Out of stock</button>
            ) : (
              <button className='button primary'>Add to bag</button>
            )
          }
        </div>
      </div>
    </div>
  );
};