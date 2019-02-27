'use strict';

const Model = require('./Model')

class ProjectModel extends Model {
  constructor({ db }) {
    super({ db, collectionName: 'Projects' })
  }

  async findOneAndUpdateUserInProject(id, userId, taskId) {
    console.log('findOneAndUpdateUserInProject', id, userId , taskId);
    const result = await this.db.get()
      .collection(this.collectionName)
      .findOneAndUpdate(
        {
          _id: this.db.objectId(id)
        },
        {
         $addToSet: {users: { userId: this.db.objectId(userId), taskId: []} ,
         userId: this.db.objectId(userId) 
        }
        },
       /*{
          $addToSet: { userId: this.db.objectId(userId) } // $addToSet
        },*/
      )
      .catch(err => {
        console.log(err);
      });
      //console.log(result);
    return result;
  }

  async insertOneTask(answerOnCommond) {
    const test = await this.db.get()
      .collection(this.collectionName)
      .insertOne(answerOnCommond);
    return test;
  }
}

module.exports = ProjectModel;
