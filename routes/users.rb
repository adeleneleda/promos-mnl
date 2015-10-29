class Users < Cuba
  define do
    on "dashboard" do
      res.write view("dashboard", title: "Dashboard")
    end

    on "logout" do
      logout(User)
      res.redirect "/", 303
    end

    on get do
      on "deals" do
        on ":id" do |id|
          deal = Product[id]
          res.write view("deals/show", title: "Promos MNL", deal: deal)
        end
      end
    end
  end
end
