# Redux Toolkit Query

Redux Toolkit Query(RTK Query), Redux Toolkit'in bir parçası olarak geliştirilen ve veri alışverişi için API çağrıları yapmayı kolaylaştıran bir kütüphanedir. Verileri almak, güncellemek, silmek ve işlemek için genellikle RESTful API'lerle çalışırken kullanılır. Bu kütüphane, veri alışverişi için Redux'u kullanırken kodu basitleştirmeyi ve optimize etmeyi amaçlar. Redux Toolkit ile birlikte default olarak gelir.
Redux Toolkit Query, bir web uygulamasında veri yüklemek için yaygın durumları basitleştirmek amacıyla tasarlanmış güçlü bir veri alımı ve önbellekleme aracıdır. Kendi veri alımı ve önbellekleme mantığınızı yazmanızı gerektirmeyen bir araçtır. Redux Toolkit paketine dahil olan isteğe bağlı bir eklentidir ve işlevselliği, Redux Toolkit'in diğer API'lerinin üzerine inşa edilmiştir.

Redux Toolkit Query, API isteklerini yönetmek için gereken kod miktarını azaltır, daha okunabilir ve yönetilebilir kod yapısı sağlar, önbellekleme, veri yeniden kullanımı ve hata yönetimi gibi özellikleriyle performans ve güvenilirliği artırır. Verileri sunucuda değiştiren veya önbelleği geçersiz kılma olasılığı olan her şey için bir Mutasyon kullanmanız genellikle önerilir. RTK Query, otomatik olarak istek başlıklarını ve yanıt ayrıştırmasını yöneten hafif bir fetch wrapper olan fetchBaseQuery ile birlikte gelir.

Ayrıca, RTK Query, API uç noktalarını önceden tanımlamanıza, argümanlardan sorgu parametrelerini oluşturmanıza ve yanıtları önbellekleme için dönüştürmenize olanak sağlar. RTK Query ayrıca, tüm veri alımı sürecini kapsayan, verileri ve yükleme durumunu bileşenlere sağlayan ve bileşenler monte edilip kaldırılırken önbellekteki verilerin ömrünü yöneten React hook'ları oluşturabilir.

State Yönetimi: Redux, genellikle büyük uygulamalarda karmaşık bir state yönetimi için tercih edilir. Redux Toolkit Query, bu state yönetimini daha da kolaylaştırır ve API isteklerini Redux store ile entegre bir şekilde yönetmeye olanak tanır.

Veri Akışı ve Güncelleme: API istekleriyle elde edilen verilerin güncellenmesi ve yeniden çağrılması gerektiğinde, Redux Toolkit Query otomatik olarak bu süreçleri yönetir. Yani, veri değiştiğinde bileşenlerin otomatik olarak güncellenmesini sağlar.

Optimizasyon ve Bellek Yönetimi: Tekrarlayan isteklerde veri saklama ve güncelleme gibi işlemleri optimize eder. Önbellekleme ve veri yeniden kullanımı gibi performans artırıcı özellikleriyle bellek kullanımını da optimize eder.

Kod Düzeni ve Basitlik: Redux Toolkit Query, API isteklerini yönetmek için gereken kod miktarını azaltır ve daha okunabilir, yönetilebilir kod yapısına olanak tanır. Bu da geliştirme sürecini kolaylaştırır.

Hata Yönetimi: Hata durumlarıyla başa çıkmak için dahili hata yönetimi mekanizmaları sunar. API isteklerindeki başarılı ve başarısız durumları yönetir, hata durumunda gerekli aksiyonları almayı kolaylaştırır.

Redux Entegrasyonu: Redux Toolkit Query, Redux Toolkit'in bir parçasıdır ve Redux store ile uyumlu olarak çalışır. Böylece Redux tabanlı projelerde uyumlu bir şekilde kullanılabilir.

Bu nedenlerden dolayı Redux Toolkit Query, Redux'u kullanan uygulamalarda veri alışverişi işlemlerini optimize etmek ve kolaylaştırmak için oldukça faydalı bir kütüphanedir.

## Örnek Kullanım

Redux Toolkit Query, genellikle createApi fonksiyonuyla kullanılır. İşte temel adımlar:

#### Adım 1: API Tanımlama

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com/' }),
  endpoints: (builder) => ({
    // Endpoint tanımları burada
  }),
});

```

- reducerPath: Redux store'da oluşturulacak olan reducer'ın adı.
- baseUrl: API isteklerinin temel URL'si.
- endpoints: API çağrıları için endpoint tanımları.

#### Adım 2: Endpoint Tanımları

```
endpoints: (builder) => ({
  getUsers: builder.query({
    query: () => 'users',
    providesTags: ['Users'], // Kullanıcıları önbellekleme etiketi
  }),
  addUser: builder.mutation({
    query: (newUser) => ({
      url: 'users',
      method: 'POST',
      body: newUser,
    }),
    invalidatesTags: ['Users'], // Yeni kullanıcı eklediğinde 'Users' etiketini geçersiz kılma. Böylelikle bu işlem neticesinde tekrar apiye istek atılır cachedeki veriler güncellenir.
  }),
  updateUser: builder.mutation({
    query: ({ id, updatedUser }) => ({
      url: `users/${id}`,
      method: 'PUT',
      body: updatedUser,
    }),
     invalidatesTags: ['Users'],
  }),
  deleteUser: builder.mutation({
    query: (id) => ({
      url: `users/${id}`,
      method: 'DELETE',
    }),
    invalidatesTags: ['Users'],
  }),
}),


```

Her endpoint tanımı, query veya mutation olabilir. query mevcut verileri almak için kullanılırken, mutation veri değişikliklerini yapmak için kullanılır.

provideTags:Bu özellik, özellikle birden fazla bileşenin aynı veri kümesini paylaştığı durumlarda, önbelleğin doğru şekilde yönetilmesini ve paylaşılan verinin güncel kalmasını sağlamak için kullanılır. Örneğin, bir API'den alınan veri setini birden fazla bileşen kullanıyorsa ve bir bileşen bu veriyi güncellediğinde, provideTags özelliği ile güncellenmiş verinin diğer bileşenler tarafından da otomatik olarak güncellenmesi sağlanabilir. Bu, veri tutarlılığını korumak için oldukça faydalı bir özelliktir. Yani, provideTags, Redux Toolkit Query içerisinde verilerin nasıl etiketleneceği ve paylaşılacağı konusunda kullanılan bir özelliktir. Örneklerde önbellekleme, veri yeniden kullanımı veya veri paylaşımı gerektiğinde bu özellik kullanılabilir. Ancak her durumda provideTags kullanmak zorunlu değildir; ihtiyaca göre tercih edilir.

invalidatesTags:Redux Toolkit Query içinde bir mutation endpoint'i tanımlarken kullanılan bir özelliktir. Bu özellik, belirli bir tag veya etiket grubunu geçersiz kılma işlevselliği sağlar. Özellikle veri güncelleme, ekleme veya silme işlemlerinde kullanılan mutation'larda kullanılır. Bir endpoint bir mutation olarak tanımlandığında, invalidatesTags özelliği belirli etiket veya etiket gruplarını belirterek bu işlevselliği gerçekleştirir. Önbellek yönetimi ve veri akışı için oldukça önemlidir.

#### Adım 3: Hookları Dışa Aktarma

```
const { useGetUsersQuery, useGetUserByIdQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = api;

```

#### Adım 4: Store a Bağlama

```
import { configureStore } from '@reduxjs/toolkit';
import { api } from './api'; // Redux Toolkit Query ile oluşturulan API servisi

const store = configureStore({
  reducer: {
    // Diğer reducer'lar buraya eklenebilir
    [api.reducerPath]: api.reducer, // API reducer'ını store'a eklemek
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware), // API middleware'ini eklemek
});


export default store;

```

#### Adım 5: Provider Sarmali:

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />
</Provider>
)


```

#### Adım 6: Kullanım

```
import { useGetUsersQuery, useDeleteUserMutation } from './api'; // API hook'ları burada import edildiğini varsayalım

const UsersComponent = () => {
  const { data: users = [], isLoading, isError } = useGetUsersQuery();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation(); // Silme mutation'ı ve loading durumu burada kullanıldı


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching users</div>;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => deleteUser(user.id)} disabled={isDeleting}>
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersComponent;


```

Rtk Query servislerini yazarken tek bir servis veya birden fazla servis kullanımı, verilerin ilişkilerine, bağımlılıklarına ve uygulamanın gereksinimlerine bağlıdır. Veriler arasında sıkı bir bağlantı ve etkileşim varsa, tek bir servis kullanmak uygun olabilir. Ancak veriler birbirinden bağımsızsa veya farklı işlevselliklere sahiplerse, ayrı servisler daha uygun olabilir.

Daha fazla bilgi için, Redux Toolkit'in resmi belgelerine bakabilirsiniz. Bu belgeler, Redux Toolkit Query'nin nasıl kullanılacağına dair ayrıntılı bilgiler içerir.

https://redux-toolkit.js.org/rtk-query/overview.

Firms Örneği:

```javascript
// React için gerekli olan özel giriş noktasını kullanarak createApi ve fetchBaseQuery'yi içe aktarın
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

// Bir hizmeti temel URL ve beklenen endpoint'lerle tanımlayın
export const firmsApi = createApi({
  reducerPath: "firmsApi", // Redux store'da oluşturulacak reducer'ın adı
  tagTypes: ["Firms"], // Kullanılan etiket tipleri
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL, // API isteklerinin temel URL'si
    prepareHeaders: (headers, { getState }) => {
      // API isteği için başlık hazırlığı
      const token = getState().auth.token;// tokeni storedan okuyoruz
      if (token) {
        headers.set("Authorization", `Token ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFirms: builder.query({
      query: () => "firms", // GET isteği için endpoint
      providesTags: ["Firms"], // Bu endpoint'un verileri sağladığı etiketler
      transformResponse: (response) => {
        return response.data; // Gelen yanıtın dönüşümü
      },
    }),
    postFirm: builder.mutation({
      query: (info) => ({
        url: "firms",
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["Firms"], // Bu etiketleri geçersiz kılan işlem
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`); // Başarılı bir işlemde bildirim gösterme
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`); // Başarısız bir işlemde bildirim gösterme
        return response;
      },
    }),
    deleteFirm: builder.mutation({
      query: (id) => ({
        url: `firms/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Firms"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
    updateFirm: builder.mutation({
      query: (info) => ({
        url: `firms/${info._id}`,
        method: "PUT",
        body: info,
      }),
      invalidatesTags: ["Firms"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
  }),
});

// Fonksiyonel bileşenlerde kullanım için hook'ları dışa aktarın
export const {
  useGetFirmsQuery,
  usePostFirmMutation,
  useDeleteFirmMutation,
  useUpdateFirmMutation,
} = firmsApi;
```

- firmsApi adında bir API tanımlıyoruz.
- reducerPath: Redux store'da oluşturulacak olan reducer'ın adını belirtiyoruz.
- tagTypes: Kullanılacak etiket tiplerini belirtiyoruz.
- baseQuery: Temel sorgu yapılandırmasını belirtiyoruz. Başlık hazırlığı ve temel URL tanımları yapılıyor.
- endpoints: API endpoint'lerini tanımlıyoruz (getFirms, postFirm, deleteFirm, updateFirm). Her biri bir query veya mutation olabilir.
- providesTags: getFirms endpoint'unun hangi etiketleri sağladığını belirtiyoruz.
- transformResponse: Gelen yanıtın dönüşümünü yapıyoruz. Örneğin, getFirms endpoint'unda gelen yanıtın response.data olarak dönüştürülmesi gibi.
- invalidatesTags: Belirli bir işlem sonucunda geçersiz kılınacak etiketleri belirtiyoruz.
- transformErrorResponse: Başarısız bir yanıt durumunda bildirim gösterme işlemini yapılandırıyoruz.

Son olarak, useGetFirmsQuery, usePostFirmMutation, useDeleteFirmMutation, useUpdateFirmMutation gibi hook'ları dışa aktarıyoruz. Bu hook'lar ilgili API endpoint'lerini kullanmak için kullanılır ve React fonksiyonel bileşenlerinde kullanılabilirler.
