export default function contact() {
  const contentEl = document.querySelector('#content');

  const contact = document.createElement('div');
  contact.innerHTML = `<ul id="contact-info">
  <li>Phone: 554-323-22</li>
                        <li>
  Address: Some street 23</li>
  </ul>`;

  return contentEl.appendChild(contact);
}
