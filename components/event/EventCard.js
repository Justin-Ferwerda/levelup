import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  game, description, date, time, organizer,
}) => {
  const [year, month, day] = date.split('-');
  const newDate = [month, day, year].join('/');

  return (
    <Card className="text-center">
      <Card.Header>{game.title}</Card.Header>
      <Card.Body>
        <Card.Title>{newDate} @ {time}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{organizer.bio}</Card.Footer>
    </Card>
  );
};

EventCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    maker: PropTypes.string,
    gamer: PropTypes.number,
    number_of_players: PropTypes.number,
    skill_level: PropTypes.number,
  }).isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  organizer: PropTypes.shape({
    id: PropTypes.number,
    uid: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

export default EventCard;
