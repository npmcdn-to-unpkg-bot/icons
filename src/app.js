import pkg from '../package.json'
import list from '../dist/sprite.json'

const { React, ReactDOM } = window

const Icons = ({ prefix }) =>
  <div>
    <h2>version: {pkg.version}</h2>
    {list.map((item) =>
      <svg>
        <use xlinkHref={`#${prefix}_${item}`} key={item} />
      </svg>
    )}
  </div>

Icons.defaultProps = {
  prefix: 'kb',
}

Icons.propTypes = {
  prefix: React.PropTypes.string,
}

ReactDOM.render(<Icons />, document.getElementById('app'))
