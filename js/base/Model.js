window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 'ckm8tqHRSD4hvJBspLVqJPky-gzGzoHsz';
            var APP_KEY = 'WdO4V7y9oIo1e45SSyLY9TuD';
            AV.init({appId: APP_ID, appKey: APP_KEY})
        },
        fetch: function () {
            var query = new AV.Query(resourceName);
            return query.find() // Promise 对象
        },
        save: function (object) {
            var Table = AV.Object.extend(resourceName);
            var table = new Table();
            return table.save(object)

        }


    }
}