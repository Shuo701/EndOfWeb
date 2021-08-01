/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import RecomBlock from './RecomBlock'
import './Recommendation.css'
import Masonry from 'react-masonry-css'

const RecomPost = ({ data }) => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1,
  }
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      columnAttrs={{
        className: 'should be overridden',
        'data-test': '',
        style: { '--test': 'test' },
      }}
      style={{ display: 'flex' }}
    >
      {data.map((post) => (
        <RecomBlock post={post} key={post.id} />
      ))}
    </Masonry>
  )
}
RecomPost.propTypes = {
  data: PropTypes.array,
}

export default RecomPost