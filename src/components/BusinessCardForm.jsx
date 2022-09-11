import classes from './BusinessCardForm.module.css';

const BusinessCardForm = (state) => {
  const { form, onFileUpload, onInputChange } = state;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Business Card Form</h2>
      <form>
        <div className={classes.formBlock}>
          <label className={classes.formLabel} htmlFor="avatar">
            Avatar
          </label>
          <input
            onChange={onFileUpload}
            type="file"
            name="avatar"
            id="avatar"
          />
        </div>

        <div className={classes.formBlock}>
          <label className={classes.formLabel} htmlFor="name">
            Name
          </label>
          <input
            onChange={onInputChange}
            className={classes.formInput}
            type="text"
            name="name"
            id="name"
            value={form.name}
            placeholder="Name"
          />
        </div>

        <div className={classes.formBlock}>
          <label className={classes.formLabel} htmlFor="description">
            Description
          </label>
          <input
            onChange={onInputChange}
            className={classes.formInput}
            type="text"
            name="description"
            id="description"
            value={form.description}
            placeholder="Description"
          />
        </div>

        <div className={classes.formBlock}>
          <label className={classes.formLabel} htmlFor="phone">
            Phone Number
          </label>
          <input
            onChange={onInputChange}
            className={classes.formInput}
            type="text"
            name="phone"
            id="phone"
            value={form.phone}
            placeholder="Phone Number"
          />
        </div>

        <div className={classes.formBlock}>
          <label className={classes.formLabel} htmlFor="address">
            Address
          </label>
          <input
            onChange={onInputChange}
            className={classes.formInput}
            type="text"
            name="address"
            id="address"
            value={form.address}
            placeholder="Address"
          />
        </div>
      </form>
    </div>
  );
};
export default BusinessCardForm;
