module.exports = mongoose => {
    const Tutorial = mongoose.model(
        "tutorial",
        mongoose.Schema({
            title: String,
            description: String,
            published: Boolean
        }, { timestamps: true })
    );
                    
    return Tutorial;
};

// Nếu bạn sử dụng ứng dụng này với giao diện người dùng
//  cần trường id thay vì _id , bạn phải ghi đè toJSON 
//   ánh xạ đối tượng mặc định thành đối tượng tùy chỉnh.
//    Vì vậy, mô hình Mongoose có thể được sửa đổi như sau:

// module.exports = mongoose => {
//     var schema = mongoose.Schema({
//         title: String,
//         description: String,
//         published: Boolean
//     }, { timestamps: true });

//     schema.method("toJSON", function() {
//         const { __v, _id, ...object } = this.toObject();
//         object.id = _id;
//         return object;
//     });

//     const Tutorial = mongoose.model("tutorial", schema);
//     return Tutorial;
// };