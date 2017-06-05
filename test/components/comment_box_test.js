import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component; // initialize (undefined)

  beforeEach(() => {
    component = renderComponent(CommentBox); // reassign :)
  });

  it('has the class: comment-box', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a submit button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows text that is entered', () => {
      expect(component.find('textarea')).to.have.value('new comment');

    });

    it('when submitted, clears the input', () => {
      console.log(component);
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });

});
