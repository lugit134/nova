import Dropdown from 'react-bootstrap/Dropdown';

export default function Galeria() {
  return (
  <>
  <div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </>
  )
}