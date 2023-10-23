// PostTypeSelection.js
import React from 'react';
import { Form, Radio } from 'semantic-ui-react';

function PostTypeSelection({ postType, setPostType }) {
  return (
    <div className="post-type-selection">
      <div className="row">
        <label>Select Post Type: 
          <Form.Field style={{ display: 'inline-block', marginLeft: '10px' }}>
            <Radio
              label="Question"
              value="question"
              checked={postType === 'question'}
              onChange={() => setPostType('question')}
            />
          </Form.Field>
          <Form.Field style={{ display: 'inline-block' }}>
            <Radio
              label="Article"
              value="article"
              checked={postType === 'article'}
              onChange={() => setPostType('article')}
            />
          </Form.Field>
        </label>
      </div>
    </div>
  );
}

export default PostTypeSelection;