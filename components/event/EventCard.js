import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { deleteEvent } from '../../utils/data/eventData';

function EventCard({
  game, description, date, time, id, onUpdate,
}) {
  const [year, month, day] = date.split('-');
  const newDate = [month, day, year].join('/');

  const deleteThisEvent = () => {
    if (window.confirm(`delete ${description}?`)) {
      deleteEvent(id).then(() => onUpdate());
    }
  };

  return (
    <Card className="text-center">
      <Card.Header>{game.title}</Card.Header>
      <Card.Body>
        <Card.Title>{newDate} @ {time}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Footer><Button onClick={deleteThisEvent}>Delete Event</Button></Card.Footer>
      </Card.Body>
    </Card>
  );
}

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
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EventCard;
