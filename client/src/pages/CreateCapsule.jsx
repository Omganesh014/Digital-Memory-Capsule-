import FileUpload from "../components/FileUpload.jsx";

export default function CreateCapsule() {
  return (
    <section>
      <h1>Create capsule</h1>
      <form className="form-card">
        <label>
          Title
          <input name="title" placeholder="A message for the future" />
        </label>
        <label>
          Message
          <textarea name="message" rows="6" placeholder="Write your memory here" />
        </label>
        <label>
          Unlock date
          <input name="unlockDate" type="datetime-local" />
        </label>
        <FileUpload />
        <button type="button">Save capsule</button>
      </form>
    </section>
  );
}
