class Apifeatures {
    constructor(query, querystr) {
        (this.query = query), (this.querystr = querystr);
    }

    search() {
        Object.keys(this.querystr).forEach((key) => {
            this.querystr[key] = { $regex: this.querystr[key], $options: "i" };
        });

        const keyword = {
            $and: [this.querystr],
        };
        this.query = this.query.find({ ...keyword });
        return this;
    }
}

module.exports = Apifeatures;
