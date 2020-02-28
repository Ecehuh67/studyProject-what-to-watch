import {ActionCreator} from "../../actions.js";
import {getSimilarFilms} from '../../utils/utils';
import {DEFAULT_GENRE} from '../../utils/consts';

const mapStateToProps = (state) => {
  return {
    isPopupActive: state.isPopupActive,
    activeFilmCard: state.activeFilmCard,
    filteredFilms: getSimilarFilms(state.films, state.activeFilmCard),
    films: (() => {
      if (state.chosenGenre === DEFAULT_GENRE) {
        return state.films.slice(0, state.showedFilms);
      }
      return state.films.slice().filter((film) => film.genre === state.chosenGenre);
    })(),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(film) {
    dispatch(ActionCreator.setActiveFIlm(film));
  }
});

export {mapStateToProps, mapDispatchToProps};