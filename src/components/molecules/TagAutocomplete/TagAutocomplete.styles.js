import styled from 'styled-components'

export const StyledReactTags = styled.div`
  .react-tags {
    position: relative;
    padding: 0.25rem 0 0 0.25rem;
    border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.inputBg};
    font-size: 0.9rem;
    line-height: 1.3;
    cursor: text;
  }

  .react-tags.is-active {
    /* border-color: #3b82f6; */
  }

  .react-tags.is-disabled {
    opacity: 0.75;
    background-color: #eaeef2;
    pointer-events: none;
    cursor: not-allowed;
  }

  .react-tags.is-invalid {
    border-color: #fd5956;
    box-shadow: 0 0 0 2px rgba(253, 86, 83, 0.25);
  }

  .react-tags__label {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .react-tags__list {
    display: inline;
    padding: 0;
  }

  .react-tags__list-item {
    display: inline;
    list-style: none;
  }

  .react-tags__tag {
    margin: 0 0.5rem 0.3rem 0;
    padding: 0.45rem 0.5rem;
    border: 0;
    border-radius: 5px;
    background-color: rgba(59, 130, 246, 0.21);
    border: 1px solid ${({ theme }) => theme.colors.tagBorder};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
    font-size: inherit;
    line-height: inherit;
  }

  .react-tags__tag:hover {
    background-color: rgba(59, 130, 246, 0.3);
    cursor: pointer;
  }

  .react-tags__tag::after {
    content: '';
    display: inline-block;
    width: 0.45rem;
    height: 0.45rem;
    clip-path: polygon(
      10% 0,
      0 10%,
      40% 50%,
      0 90%,
      10% 100%,
      50% 60%,
      90% 100%,
      100% 90%,
      60% 50%,
      100% 10%,
      90% 0,
      50% 40%
    );
    margin-left: 0.5rem;
    margin-bottom: 0.1em;
    font-size: 0.875rem;
    background-color: ${({ theme }) => theme.colors.accent};
  }

  .react-tags__tag:hover::after {
  }

  .react-tags__combobox {
    display: inline-block;
    padding: 0.375rem 0.25rem;
    margin-bottom: 0.25rem;
    max-width: 100%;
  }

  .react-tags__combobox-input {
    max-width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    background: none;
    font-size: inherit;
    line-height: inherit;
    color: ${({ theme }) => theme.colors.text};
  }

  .react-tags__combobox-input::placeholder {
    color: #7c7d86;
    opacity: 1;
  }

  .react-tags__listbox {
    position: absolute;
    z-index: 1;
    top: calc(100% + 5px);
    left: -2px;
    right: -2px;
    max-height: 10rem;
    width: max-content;
    overflow-y: auto;
    background: ${({ theme }) => theme.colors.inputBg};
    color: ${({ theme }) => theme.colors.inputFont};
    border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 10px 15px -4px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;
  }

  .react-tags__listbox-option {
    padding: 0.8em 0.8em;
    border-radius: 5px;
  }

  .react-tags__listbox-option:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.navbarBorder};
    transition: 200ms;
  }

  .react-tags__listbox-option:not([aria-disabled='true']).is-active {
    background: ${({ theme }) => theme.colors.buttonBg};
    color: white;
  }

  .react-tags__listbox-option[aria-disabled='true'] {
    color: #ffff;
    cursor: not-allowed;
    pointer-events: none;
  }

  .react-tags__listbox-option[aria-selected='true']::after {
    content: '•';
    margin-left: 0.5rem;
  }

  .react-tags__listbox-option[aria-selected='true']:not(.is-active)::after {
    color: white;
  }

  .react-tags__listbox-option-highlight {
    background-color: #ffdd00;
  }
`
