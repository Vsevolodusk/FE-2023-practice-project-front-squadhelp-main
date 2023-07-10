const ContestData = (props) => {
  const { getData } = props;
  const setNewContestData = (values) => {
    const data = new FormData();
    Object.keys(values).forEach((key) => {
      if (key !== "file" && values[key]) data.append(key, values[key]);
    });
    if (values.file instanceof File) {
      data.append("file", values.file);
    }
    data.append("contestId", props.contestData.id);
    props.update(data);
  };

  const getContestObjInfo = () => {
    const {
      focusOfWork,
      industry,
      nameVenture,
      styleName,
      targetCustomer,
      title,
      brandStyle,
      typeOfName,
      typeOfTagline,
      originalFileName,
      contestType,
    } = props.contestData;

    const data = {
      focusOfWork,
      industry,
      nameVenture,
      styleName,
      targetCustomer,
      title,
      brandStyle,
      typeOfName,
      typeOfTagline,
      originalFileName,
      contestType,
    };

    const defaultData = {};

    Object.keys(data).forEach((key) => {
      if (data[key]) {
        if (key === "originalFileName") {
          defaultData.file = { name: data[key] };
        } else {
          defaultData[key] = data[key];
        }
      }
    });
    return defaultData;
  };
  getData({setNewContestData, getContestObjInfo})
};
export default ContestData;
