/* eslint-disable no-console */
class Model {
  constructor({ db, collectionName, logger }) {
    this.db = db;
    this.collectionName = collectionName;
    this.logger = logger;
  }

  async getList() {
    return this.find().toArray();
  }

  find(filter, projection) {
    return this.db.get()
      .collection(this.collectionName)
      .find(this.getFilter(filter)).project(projection);
  }

  async findOne(filter) {
    const result = await this.db.get()
      .collection(this.collectionName)
      .findOne(this.getFilter(filter));
    return result;
  }

  async findOneAndUpdate(filter, update, params) {
    // console.log("update ",update)
    const result = await this.db.get()
      .collection(this.collectionName)
      .findOneAndUpdate(
        this.getFilter(filter), {
          $set: update,
        },
        params,
      )
      .catch((err) => {
        console.log(err);
        this.logger.error('Error', err);
      });
    console.log('Результат обновления', result);
    return result;
  }

  async insertOne(params) {
    const result = await this.db.get()
      .collection(this.collectionName)
      .insertOne(params);
    return result;
  }

  async deleteOne(filter) {
    const result = await this.db.get()
      .collection(this.collectionName)
      .deleteOne(this.getFilter(filter));
    return result;
  }

  getFilter(filter) {
    if (filter && filter._id) {
      const obj = filter;
      obj._id = this.db.objectId(filter._id);
    }
    return filter;
  }
}

module.exports = Model;
