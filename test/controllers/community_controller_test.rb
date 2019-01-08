require 'test_helper'

class CommunityControllerTest < ActionDispatch::IntegrationTest
  test "should get top" do
    get community_top_url
    assert_response :success
  end

end
