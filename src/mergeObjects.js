
      const mergeObjects = (obj1, obj2, index) => {
        const deepMerge = (a, b) => {
            const result = { ...a };
            for (const [key, value] of Object.entries(b)) {
                if (result.hasOwnProperty(key) && typeof result[key] === 'object' && typeof value === 'object') {
                    result[key] = deepMerge(result[key], value);
                } else {
                    result[key] = value;
                }
            }
            return result;
        };
        let merged = {};
        if (obj1 && index in obj1) {
            merged = deepMerge(merged, obj1[index]);
        }
        if (obj2 && index in obj2) {
            merged = deepMerge(merged, obj2[index]);
        }
        return merged;
      };

      module.exports = {
        mergeObjects
      };