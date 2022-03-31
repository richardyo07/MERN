/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar/Avatar';
import Card from '../../shared/components/UIElements/Avatar/Card';
import './UserItem.css';

const UsersItem = props => {
  return (
    <li className="user-item">
      <div>
        <Card className="user-item__content">
          <Link to={`/${props.id}/places`}>
            <div className="user-item__image">
              <Avatar
                image={`http://localhost:5000/${props.image}`}
                alt={props.name}
              />
            </div>
            <div className="user-item__info">
              <h2>{props.name}</h2>
              <h2>
                {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
              </h2>
            </div>
          </Link>
        </Card>
      </div>
    </li>
  );
};

export default UsersItem;
