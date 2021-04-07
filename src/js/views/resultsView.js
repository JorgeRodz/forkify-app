import View from './View.js';
import previewView from './previewView.js';

/*---------------- Parcel --------------------*/
/* - Para que parcel pueda renderizar los iconos -- */
// import icons from '../img/icons.svg' // Parcel 1
import icons from 'url:../../img/icons.svg'; // Parcel 2

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'No recepies found for your query! Please try with another one!';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
