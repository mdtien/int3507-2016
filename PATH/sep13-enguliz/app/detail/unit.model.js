"use strict";
/**
 * Created by Thinking on 09/24/2016.
 */
class Unit {
    constructor(_id, unitTitle, unitSubTitle, unitThumbnail, unitViews, unitThreads, unitTime, createdDate, categoryIdRef, unitType, question) {
        this._id = _id;
        this.unitTitle = unitTitle;
        this.unitSubTitle = unitSubTitle;
        this.unitThumbnail = unitThumbnail;
        this.unitViews = unitViews;
        this.unitThreads = unitThreads;
        this.unitTime = unitTime;
        this.createdDate = createdDate;
        this.categoryIdRef = categoryIdRef;
        this.unitType = unitType;
        this.question = question;
    }
}
exports.Unit = Unit;
//# sourceMappingURL=unit.model.js.map